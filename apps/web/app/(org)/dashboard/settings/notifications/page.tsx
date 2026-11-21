import type { Metadata } from "next";
import { NotificationsSettings } from "./NotificationsSettings";

export const metadata: Metadata = {
	title: "Notification Settings — Look",
};

export default function NotificationsSettingsPage() {
	return <NotificationsSettings />;
}
