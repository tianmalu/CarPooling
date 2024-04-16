import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import RiderIndex from "./rider/RiderIndex";
import DriverIndex from "./driver/DriverIndex";

const TagBar = () => {
    return (
        <div className="overflow-x-auto">
          <Tabs aria-label="Full width tabs" style="fullWidth">
            <Tabs.Item active title="Rider" icon={MdEmojiPeople}>
                <RiderIndex />
            </Tabs.Item>
            <Tabs.Item title="Driver" icon={FaCarAlt}>
                <DriverIndex />
            </Tabs.Item>
          </Tabs>
        </div>
      );
}

export default TagBar