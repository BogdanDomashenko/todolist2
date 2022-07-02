import { useState } from "react";
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItem,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { mainNavigation } from "./navigation.data";

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;

const Navigation = (props: Props) => {
	const { window } = props;
	const container =
		window !== undefined ? () => window().document.body : undefined;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Box>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						{mainNavigation.title}
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{mainNavigation.list.map((item) => (
							<Button key={item.title} sx={{ color: "#fff" }}>
								{item.title}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
						<Typography variant="h6" sx={{ my: 2 }}>
							{mainNavigation.title}
						</Typography>
						<Divider />
						<List>
							{mainNavigation.list.map((item) => (
								<ListItem key={item.title} disablePadding>
									<ListItemButton sx={{ textAlign: "center" }}>
										<ListItemText primary={item.title} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navigation;
