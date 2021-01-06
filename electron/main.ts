/* eslint-disable @typescript-eslint/no-floating-promises */
import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as isDev from "electron-is-dev";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

let win: BrowserWindow | null = null;

function createWindow() {
	win = new BrowserWindow({
		minWidth: 930,
		minHeight: 750,
		width: 1200,
		height: 1000,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	if (isDev) {
		win.loadURL("http://localhost:3000/dashboard");
	} else {
		// 'build/index.html'
		win.loadURL(`file://${__dirname}/`);
	}

	win.on("closed", () => {
		win = null;
	});

	// Hot Reloading
	if (isDev) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-var-requires,global-require
		require("electron-reload")(__dirname, {
			electron: path.join(__dirname, "..", "..", "node_modules", ".bin", "electron"),
			forceHardReset: true,
			hardResetMethod: "exit",
		});
	}

	// DevTools
	installExtension(REACT_DEVELOPER_TOOLS)
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log("An error occurred: ", err));

	if (isDev) {
		win.webContents.openDevTools();
	}
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (win === null) {
		createWindow();
	}
});
