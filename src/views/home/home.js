import React from "react";
import { useSelector } from "react-redux";
import "./home.css";

export const Home = () => {
	const state = useSelector((state) => state.ui);
	const { loadingNotifications, errorNotifications, notifications } = state;

	if (loadingNotifications) {
		return <div>Cargando...</div>;
	} else if (errorNotifications && !loadingNotifications) {
		return <div>No se pudo cargar balances...</div>;
	} else {
		return (
			<div className="home--main--container">
				{notifications &&
					notifications.map((notif) => {
						return <div key={notif.id}>{JSON.stringify(notif)}</div>;
					})}
			</div>
		);
	}
};
