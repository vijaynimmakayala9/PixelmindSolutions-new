// utils/AdminVisitors.js
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Globe, 
  Monitor, 
  Smartphone,
  Tablet,
  Laptop,
  Chrome,
  Apple,
  Windows,
  MapPin,
  Calendar,
  Search,
  RefreshCw,
  Download,
  Eye,
  X,
  Clock,
  TrendingUp,
  Activity,
  Filter
} from 'lucide-react';
import { BiWindows } from 'react-icons/bi';

const API_URL = process.env.REACT_APP_API_URL || "https://pms-tracker-2.onrender.com";

const AdminVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    unique: 0,
    countries: []
  });
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [ipDetails, setIpDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Fetch visitors data
  const fetchVisitors = async () => {
    try {
      const response = await fetch(`${API_URL}/api/visitors?limit=100`);
      const data = await response.json();
      setVisitors(data.data || []);
      
      // Calculate stats
      const today = new Date().toDateString();
      const todayCount = data.data?.filter(v => 
        new Date(v.createdAt).toDateString() === today
      ).length || 0;
      
      const uniqueIPs = new Set(data.data?.map(v => v.ip) || []).size;
      
      // Country stats
      const countryMap = {};
      data.data?.forEach(v => {
        if (v.country) {
          countryMap[v.country] = (countryMap[v.country] || 0) + 1;
        }
      });
      
      const countries = Object.entries(countryMap)
        .map(([country, count]) => ({ country, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setStats({
        total: data.pagination?.totalItems || data.data?.length || 0,
        today: todayCount,
        unique: uniqueIPs,
        countries
      });
    } catch (err) {
      console.error("Failed to fetch visitors:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch IP details
  const fetchIpDetails = async (ip) => {
    try {
      setIpDetails(null);
      const response = await fetch(`${API_URL}/api/ip-details/${ip}`);
      const data = await response.json();
      setIpDetails(data);
    } catch (err) {
      console.error("Failed to fetch IP details:", err);
    }
  };

  // Initial fetch and auto-refresh
  useEffect(() => {
    fetchVisitors();
    
    let interval;
    if (autoRefresh) {
      interval = setInterval(fetchVisitors, 30000); // Refresh every 30 seconds
    }
    
    return () => clearInterval(interval);
  }, [autoRefresh]);

  // Filter visitors based on search and filters
  const filteredVisitors = visitors.filter(visitor => {
    // Search filter
    const matchesSearch = 
      visitor.ip?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.browser?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.os?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.page?.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Date filter
    if (dateRange !== 'all') {
      const now = new Date();
      const visitorDate = new Date(visitor.createdAt);
      const diffDays = Math.floor((now - visitorDate) / (1000 * 60 * 60 * 24));
      
      switch(dateRange) {
        case 'today':
          if (diffDays > 0) return false;
          break;
        case 'week':
          if (diffDays > 7) return false;
          break;
        case 'month':
          if (diffDays > 30) return false;
          break;
        default:
          break;
      }
    }

    // Type filter
    switch(filter) {
      case 'desktop':
        return visitor.device === 'desktop';
      case 'mobile':
        return visitor.device === 'mobile';
      case 'tablet':
        return visitor.device === 'tablet';
      default:
        return true;
    }
  });

  // Get device icon
  const getDeviceIcon = (device) => {
    switch(device) {
      case 'mobile':
        return <Smartphone className="h-4 w-4" />;
      case 'tablet':
        return <Tablet className="h-4 w-4" />;
      default:
        return <Laptop className="h-4 w-4" />;
    }
  };

  // Get browser icon
  const getBrowserIcon = (browser) => {
    if (browser?.toLowerCase().includes('chrome')) {
      return <Chrome className="h-4 w-4" />;
    } else if (browser?.toLowerCase().includes('safari')) {
      return <Monitor className="h-4 w-4" />;
    } else if (browser?.toLowerCase().includes('firefox')) {
      return <Monitor className="h-4 w-4" />;
    }
    return <Monitor className="h-4 w-4" />;
  };

  // Get OS icon
  const getOsIcon = (os) => {
    if (os?.toLowerCase().includes('windows')) {
      return <BiWindows className="h-4 w-4" />;
    } else if (os?.toLowerCase().includes('mac')) {
      return <Apple className="h-4 w-4" />;
    } else if (os?.toLowerCase().includes('linux')) {
      return <Monitor className="h-4 w-4" />;
    }
    return <Monitor className="h-4 w-4" />;
  };

  // Format time
  const formatTime = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading visitor data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Visitor Analytics</h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => fetchVisitors()}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <RefreshCw className="h-4 w-4 text-gray-600" />
              <span>Refresh</span>
            </button>
            <label className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span className="text-sm text-gray-700">Auto-refresh</span>
            </label>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Visitors</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today</p>
                <p className="text-3xl font-bold text-gray-900">{stats.today}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Unique IPs</p>
                <p className="text-3xl font-bold text-gray-900">{stats.unique}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Countries</p>
                <p className="text-3xl font-bold text-gray-900">{stats.countries.length}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Top Countries */}
        {stats.countries.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Countries</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {stats.countries.map(({ country, count }) => (
                <div key={country} className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-medium text-gray-900">{country}</div>
                  <div className="text-sm text-gray-600">{count} visitors</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search IP, country, browser..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Devices</option>
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
            </select>

            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Visitors Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Browser/OS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredVisitors.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                      No visitors found
                    </td>
                  </tr>
                ) : (
                  filteredVisitors.map((visitor) => (
                    <tr key={visitor._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          {formatTime(visitor.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        {visitor.ip}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {visitor.country || 'Unknown'}
                        </div>
                        {visitor.city && (
                          <div className="text-xs text-gray-500">{visitor.city}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          {getDeviceIcon(visitor.device)}
                          <span className="ml-2 capitalize">{visitor.device}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getBrowserIcon(visitor.browser)}
                          <span className="text-sm text-gray-900">{visitor.browser || 'Unknown'}</span>
                          <span className="text-xs text-gray-500">/</span>
                          {getOsIcon(visitor.os)}
                          <span className="text-sm text-gray-600">{visitor.os || 'Unknown'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {visitor.page}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            setSelectedVisitor(visitor);
                            fetchIpDetails(visitor.ip);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visitor Details Modal */}
        {selectedVisitor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">Visitor Details</h2>
                <button
                  onClick={() => {
                    setSelectedVisitor(null);
                    setIpDetails(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Basic Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">IP Address</p>
                      <p className="font-mono text-gray-900">{selectedVisitor.ip}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="text-gray-900">{new Date(selectedVisitor.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Country</p>
                      <p className="text-gray-900">{selectedVisitor.country || 'Unknown'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">City</p>
                      <p className="text-gray-900">{selectedVisitor.city || 'Unknown'}</p>
                    </div>
                  </div>
                </div>

                {/* Device Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Device</p>
                      <p className="text-gray-900 capitalize">{selectedVisitor.device}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Browser</p>
                      <p className="text-gray-900">{selectedVisitor.browser || 'Unknown'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Operating System</p>
                      <p className="text-gray-900">{selectedVisitor.os || 'Unknown'}</p>
                    </div>
                  </div>
                </div>

                {/* Page Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Page Visited</h3>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedVisitor.page}</p>
                </div>

                {/* IP Details from external API */}
                {ipDetails && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">IP Geolocation Details</h3>
                    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">ISP</p>
                        <p className="text-gray-900">{ipDetails.connection?.isp || 'Unknown'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Organization</p>
                        <p className="text-gray-900">{ipDetails.connection?.org || 'Unknown'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Timezone</p>
                        <p className="text-gray-900">{ipDetails.timezone?.id || 'Unknown'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Coordinates</p>
                        <p className="text-gray-900">
                          {ipDetails.latitude && ipDetails.longitude 
                            ? `${ipDetails.latitude}, ${ipDetails.longitude}`
                            : 'Unknown'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminVisitors;