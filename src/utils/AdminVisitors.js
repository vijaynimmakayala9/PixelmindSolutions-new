import { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Globe, Building, Phone, Flag, Clock, Wifi, Info, ExternalLink } from 'lucide-react';

const AdminVisitors = () => {
    const [visitors, setVisitors] = useState([]);
    const [ipDetails, setIpDetails] = useState({});
    const [selectedIp, setSelectedIp] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchVisitors();
    }, []);

    const fetchVisitors = async () => {
        try {
            const res = await axios.get("https://pms-tracker-2.onrender.com/api/visitors");
            setVisitors(res.data);
        } catch (error) {
            console.error("Error fetching visitors:", error);
        }
    };

    const handleIpClick = async (ip) => {
        setSelectedIp(ip);
        setIpDetails({});
        setLoading(true);

        const modal = new window.bootstrap.Modal(
            document.getElementById("ipModal")
        );
        modal.show();

        try {
            const res = await axios.get(
                `https://pms-tracker-2.onrender.com/api/ip-details/${ip}`
            );
            setIpDetails(res.data);
        } catch (err) {
            setIpDetails({
                error: true,
                message: "Unable to fetch location"
            });
        } finally {
            setLoading(false);
        }
    };

    const ConnectionBadge = ({ org }) => (
        <span className="badge bg-info text-dark d-inline-flex align-items-center gap-1">
            <Wifi size={12} />
            {org || "Unknown ISP"}
        </span>
    );

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: "#f8f9fc" }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
                        <Globe className="me-2" size={28} style={{ color: "#4f46e5" }} />
                        Visitors Dashboard
                    </h3>
                    <p className="text-muted mb-0">
                        Track and monitor all visitor activities in real-time
                    </p>
                </div>
                <button
                    className="btn btn-primary d-flex align-items-center gap-2"
                    onClick={fetchVisitors}
                    style={{ backgroundColor: "#4f46e5", borderColor: "#4f46e5" }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                    Refresh Data
                </button>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#e0e7ff" }}>
                                    <Users size={20} style={{ color: "#4f46e5" }} />
                                </div>
                                <div>
                                    <h6 className="text-muted mb-1">Total Visitors</h6>
                                    <h4 className="mb-0 fw-bold">{visitors.length}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#ffe4e6" }}>
                                    <Globe size={20} style={{ color: "#e11d48" }} />
                                </div>
                                <div>
                                    <h6 className="text-muted mb-1">Unique IPs</h6>
                                    <h4 className="mb-0 fw-bold">
                                        {new Set(visitors.map(v => v.ip)).size}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#dbeafe" }}>
                                    <Smartphone size={20} style={{ color: "#2563eb" }} />
                                </div>
                                <div>
                                    <h6 className="text-muted mb-1">Devices</h6>
                                    <h4 className="mb-0 fw-bold">
                                        {new Set(visitors.map(v => v.device)).size}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#f3e8ff" }}>
                                    <MapPin size={20} style={{ color: "#9333ea" }} />
                                </div>
                                <div>
                                    <h6 className="text-muted mb-1">Countries</h6>
                                    <h4 className="mb-0 fw-bold">
                                        {new Set(visitors.map(v => `${v.city}, ${v.country}`)).size}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead style={{ backgroundColor: "#f1f5f9", color: "#475569" }}>
                                <tr>
                                    <th className="px-4 py-3">#</th>
                                    <th className="px-4 py-3">IP Address</th>
                                    <th className="px-4 py-3">Device Info</th>
                                    <th className="px-4 py-3">Location</th>
                                    <th className="px-4 py-3">Page Visited</th>
                                    <th className="px-4 py-3">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visitors.map((v, i) => (
                                    <tr key={i} className="border-bottom">
                                        <td className="px-4 py-3">
                                            <span className="fw-semibold text-muted">#{i + 1}</span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button
                                                className="btn btn-link p-0 text-decoration-none fw-medium"
                                                onClick={() => handleIpClick(v.ip)}
                                                style={{ color: "#4f46e5" }}
                                            >
                                                {v.ip}
                                            </button>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="d-flex flex-column">
                                                <span className="fw-medium">{v.device || "Unknown"}</span>
                                                <small className="text-muted">
                                                    {v.browser} • {v.os}
                                                </small>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="d-flex align-items-center gap-2">
                                                {v.country && (
                                                    <img
                                                        src={`https://flagcdn.com/20x15/${v.country?.toLowerCase?.() || 'in'}.png`}
                                                        alt={v.country}
                                                        style={{ width: 20, height: 15, objectFit: 'cover' }}
                                                    />
                                                )}
                                                <span>{v.city}, {v.country}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="badge bg-light text-dark p-2">
                                                {v.page || "/"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="d-flex flex-column">
                                                <span className="fw-medium">
                                                    {new Date(v.createdAt).toLocaleDateString()}
                                                </span>
                                                <small className="text-muted">
                                                    {new Date(v.createdAt).toLocaleTimeString()}
                                                </small>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* IP Details Modal */}
            <div className="modal fade" id="ipModal" tabIndex="-1">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header border-0" style={{ backgroundColor: "#4f46e5", color: "white" }}>
                            <h5 className="modal-title d-flex align-items-center gap-2">
                                <Globe size={20} />
                                IP Details: {selectedIp}
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body p-4">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary mb-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="text-muted">Fetching IP details...</p>
                                </div>
                            ) : ipDetails.error ? (
                                <div className="alert alert-danger d-flex align-items-center gap-3 py-4">
                                    <Info size={24} />
                                    <div>
                                        <h6 className="mb-1">Error</h6>
                                        <p className="mb-0">{ipDetails.message}</p>
                                    </div>
                                </div>
                            ) : ipDetails.ip ? (
                                <div className="row g-4">
                                    {/* Main Info Card */}
                                    <div className="col-12">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center gap-3">
                                                    {ipDetails.flag?.img && (
                                                        <img
                                                            src={ipDetails.flag.img}
                                                            alt={ipDetails.country}
                                                            style={{ width: 48, height: 36, objectFit: 'cover', borderRadius: 4 }}
                                                        />
                                                    )}
                                                    <div>
                                                        <h4 className="mb-1">{ipDetails.city}, {ipDetails.country}</h4>
                                                        <div className="d-flex gap-3">
                                                            <span className="badge bg-secondary">{ipDetails.continent}</span>
                                                            <span className="badge bg-info">{ipDetails.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location Details */}
                                    <div className="col-md-6">
                                        <div className="card border-0 shadow-sm h-100">
                                            <div className="card-header bg-transparent border-0 pt-3">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">
                                                    <MapPin size={16} className="text-primary" />
                                                    Location Details
                                                </h6>
                                            </div>
                                            <div className="card-body pt-0">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-muted">Country:</td>
                                                            <td className="fw-medium">
                                                                {ipDetails.country} ({ipDetails.country_code})
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Region:</td>
                                                            <td className="fw-medium">{ipDetails.region} ({ipDetails.region_code})</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">City:</td>
                                                            <td className="fw-medium">{ipDetails.city}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Postal Code:</td>
                                                            <td className="fw-medium">{ipDetails.postal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Coordinates:</td>
                                                            <td className="fw-medium">
                                                                {ipDetails.latitude}, {ipDetails.longitude}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connection Details */}
                                    <div className="col-md-6">
                                        <div className="card border-0 shadow-sm h-100">
                                            <div className="card-header bg-transparent border-0 pt-3">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">
                                                    <Wifi size={16} className="text-success" />
                                                    Connection Details
                                                </h6>
                                            </div>
                                            <div className="card-body pt-0">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-muted">ISP:</td>
                                                            <td className="fw-medium">{ipDetails.connection?.isp}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Organization:</td>
                                                            <td className="fw-medium">{ipDetails.connection?.org}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">ASN:</td>
                                                            <td className="fw-medium">AS{ipDetails.connection?.asn}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Domain:</td>
                                                            <td className="fw-medium">{ipDetails.connection?.domain}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timezone Info */}
                                    <div className="col-md-6">
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-header bg-transparent border-0 pt-3">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">
                                                    <Clock size={16} className="text-warning" />
                                                    Timezone Information
                                                </h6>
                                            </div>
                                            <div className="card-body pt-0">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-muted">Timezone:</td>
                                                            <td className="fw-medium">{ipDetails.timezone?.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Abbreviation:</td>
                                                            <td className="fw-medium">{ipDetails.timezone?.abbr}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">UTC Offset:</td>
                                                            <td className="fw-medium">{ipDetails.timezone?.utc}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">DST:</td>
                                                            <td className="fw-medium">{ipDetails.timezone?.is_dst ? 'Yes' : 'No'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Info */}
                                    <div className="col-md-6">
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-header bg-transparent border-0 pt-3">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">
                                                    <Info size={16} className="text-info" />
                                                    Additional Information
                                                </h6>
                                            </div>
                                            <div className="card-body pt-0">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-muted">Calling Code:</td>
                                                            <td className="fw-medium">+{ipDetails.calling_code}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Capital:</td>
                                                            <td className="fw-medium">{ipDetails.capital}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">Borders:</td>
                                                            <td className="fw-medium">{ipDetails.borders}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-muted">EU Member:</td>
                                                            <td className="fw-medium">{ipDetails.is_eu ? 'Yes' : 'No'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Flag Display */}
                                    {ipDetails.flag?.emoji && (
                                        <div className="col-12">
                                            <div className="alert alert-light mb-0 d-flex align-items-center gap-3">
                                                <span style={{ fontSize: '2rem' }}>{ipDetails.flag.emoji}</span>
                                                <div>
                                                    <small className="text-muted d-block">Flag Emoji</small>
                                                    <code>{ipDetails.flag.emoji_unicode}</code>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Missing icon components
const Users = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const Smartphone = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>;

export default AdminVisitors;