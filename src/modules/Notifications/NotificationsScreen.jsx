import DashboardTemplate from "../../components/Templates/DashboardTemplate.jsx";
import Form from "./Form.jsx";
import NotificationList from "./NotificationList.jsx";
import Chart from "chart.js/auto";
import { Pie, Line } from "react-chartjs-2";
function NotificationsScreen() {
  const data = {
    labels: ["Notification Success", "Notification Failure"],
    datasets: [
      {
        label: "Notifications",
        data: [4500, 130],
        backgroundColor: [
          "rgb(144, 238, 144)", // Light Green
          "rgb(255, 182, 193)", // Light Pink
        ],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const line_data = {
    labels: ["March", "April", "May"],
    datasets: [
      {
        label: "Notification Reach",
        data: [600, 3600, 2100],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (  
    <DashboardTemplate pageTitle={"Notifications"}>
     <div className="bg-white py-8">
    <div className="text-3xl p-12">Notifications Analytics</div>
     <div className="flex justify-center text-5xl w-[70vw] h-[70vh]">
        <Pie data={data} />
        </div>
        <hr className="mt-12"/>
    <div className="text-3xl p-12">Notifications Reach</div>
        <div className="flex justify-center text-5xl w-[70vw] h-[70vh] my-12">
        <Line data={line_data} />
        </div>
        {/* <hr className="mt-12"/> */}
     </div>

     <NotificationList />
    </DashboardTemplate>
  );
}

export default NotificationsScreen;