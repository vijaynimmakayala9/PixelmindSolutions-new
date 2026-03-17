import { useEffect, useState } from "react";
import axios from "axios";

const AdminVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [ipDetails, setIpDetails] = useState({});
  const [selectedIp, setSelectedIp] = useState("");

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const res = await axios.get("https://pms-tracker-2.onrender.com/api/visitors");
    setVisitors(res.data);
  };

  const handleIpClick = async (ip) => {
    setSelectedIp(ip);
    setIpDetails({});

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
      console.log(err);
    }
  };

  return (
    <div className="container py-4">

      <h3 className="mb-4 fw-bold">Visitors Dashboard</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>IP</th>
              <th>Device</th>
              <th>Browser</th>
              <th>OS</th>
              <th>Location</th>
              <th>Page</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {visitors.map((v, i) => (
              <tr key={i}>
                <td>{i + 1}</td>

                <td>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleIpClick(v.ip)}
                  >
                    {v.ip}
                  </button>
                </td>

                <td>{v.device}</td>
                <td>{v.browser}</td>
                <td>{v.os}</td>

                <td>{v.city}, {v.country}</td>

                <td>{v.page}</td>

                <td>{new Date(v.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div className="modal fade" id="ipModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">IP Details: {selectedIp}</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {Object.keys(ipDetails).length === 0 ? (
                <div className="text-center">
                  <div className="spinner-border"></div>
                </div>
              ) : (
                <table className="table table-bordered">
                  <tbody>
                    <tr><th>Country</th><td>{ipDetails.country_name}</td></tr>
                    <tr><th>City</th><td>{ipDetails.city}</td></tr>
                    <tr><th>Region</th><td>{ipDetails.region}</td></tr>
                    <tr><th>ISP</th><td>{ipDetails.org}</td></tr>
                    <tr><th>Latitude</th><td>{ipDetails.latitude}</td></tr>
                    <tr><th>Longitude</th><td>{ipDetails.longitude}</td></tr>
                    <tr><th>Timezone</th><td>{ipDetails.timezone}</td></tr>
                  </tbody>
                </table>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminVisitors;