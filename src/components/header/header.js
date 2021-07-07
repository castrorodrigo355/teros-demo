import React from "react";
import alchemyIcon from "../../icons/alchemy--icon.png";
// import { Route } from "../route/route";
// import { routers } from "../../constants/header";
import { startLogout } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { getNotifications, toggleSidebar } from "../../actions/ui";
import "./header.css";

export const Header = () => {
	const dispatch = useDispatch();

	const iconList = [
		{
			id: 1,
			icon: "pi pi-bell p-mr-2",
			onClickIcon: () => dispatch(getNotifications()),
		},
		{
			id: 2,
			icon: "pi pi-users p-mr-2",
			onClickIcon: () => console.log("USERS"),
		},
		{
			id: 3,
			icon: "pi pi-angle-down p-mr-2",
			onClickIcon: () => dispatch(startLogout()),
		},
	];

	return (
		<div className="header--main--container">
			<div className="header--main--container--toogle">
				<i
					onClick={() => dispatch(toggleSidebar())}
					className="pi-bars"
					style={{
						fontSize: "1em",
						margin: "0 10px",
						color: "#fff",
						fontStyle: "normal",
					}}
				/>
			</div>
			<div className="header--main--container--logo">
				<div className="header--main--container--logo--image">
					<img src={alchemyIcon} alt="..." />
				</div>
			</div>
			<div className="header--main--container--icons">
				<div className="header--main--container--logout">
					{iconList.map((element) => (
						<HeaderIcon key={element.id} element={element} />
					))}
				</div>
			</div>
		</div>
	);
};

const HeaderIcon = ({ element }) => {
	return (
		<i
			onClick={element.onClickIcon}
			className={element.icon}
			style={{ fontSize: "1.5em", margin: "0 7px" }}
		/>
	);
};
