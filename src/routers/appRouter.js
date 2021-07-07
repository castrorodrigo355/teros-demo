import React from "react";
import { Home } from "../views/home/home";
import { Header } from "../components/header/header";
import { Sidebar } from "primereact/sidebar";
import { toggleSidebar } from "../actions/ui";
import { SidebarContent } from "../components/sidebarContent/sidebarContent";
import { Switch, Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./routerStyles.css";

export const AppRouter = () => {
	const dispatch = useDispatch();
	const { openSidebar } = useSelector((state) => state.ui);

	const customIcons = (
		<React.Fragment>
			<button className="p-sidebar-icon p-link p-mr-1">
				<span className="pi pi-print" />
			</button>
			<button className="p-sidebar-icon p-link p-mr-1">
				<span className="pi pi-arrow-right" />
			</button>
		</React.Fragment>
	);

	return (
		<div className="router--main--container">
			<Header />
			<Sidebar
				visible={openSidebar}
				onHide={() => dispatch(toggleSidebar())}
				icons={customIcons}
			>
				<SidebarContent />
			</Sidebar>
			<Switch>
				<Route exact path="/" component={Home} />
				{/* <Route path="/balance" component={Balance} /> */}
				<Redirect to="/" />
			</Switch>
		</div>
	);
};
