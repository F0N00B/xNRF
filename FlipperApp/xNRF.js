// import modules
let eventLoop = require("event_loop");
let gui = require("gui");
let loadingView = require("gui/loading");
let submenuView = require("gui/submenu");
let textBoxView = require("gui/text_box");
let gpio = require("gpio");


let serial = require("serial");
serial.setup("usart", 115200);

var set = 0;
var onlines = "0";


let res_pin = gpio.get("pc0"); // C0 / 16 PIN - ESP32 Reset PIN
res_pin.init({ direction: "out", outMode: "push_pull"});


res_pin.write(true);
delay(300);
let res_pins = gpio.get("pc0"); // C0 / 16 PIN - ESP32 Reset PIN
res_pins.init({ direction: "in", inMode: "analog" });
res_pins.write(false);
delay(300);

function SerialCMD(cmd) {
		serial.setup("usart", 115200);
		delay(500);
		serial.write(cmd);
		delay(500);
		serial.end();
}

print("-------------------");
print("NRF24 Serial Jammer");
print("-------------------");
print("by x01r");
print("");
delay(250);
print("");
print("Waiting for NRF ..");

delay(500);


// check for online NRF's
while (set === 0) {
    let rx_data = serial.readln(1000);
    if (rx_data !== undefined && rx_data === "000" ||  rx_data === "001" ||  rx_data === "011" ||  rx_data === "111" ||  rx_data === "110" ||  rx_data === "100" ||  rx_data === "101" ||  rx_data === "010" ) {
		
		if (rx_data === "000") {
			onlines = "0";
		} else if (rx_data === "001" || rx_data === "100" || rx_data === "010") {
			onlines = "1";
		} else if (rx_data === "011" || rx_data === "110" ||  rx_data === "101") {
			onlines = "2";
		} else if (rx_data === "111") {
			onlines = "3";
		}
        print(""+onlines + " NRF's ONLINE");
		
		if (onlines !== "0") { // online NRF's detected
			
				set++;
				delay(1000);
				serial.end();
				print("Loading Jammer Menu ...");
				delay(2000);
			
		}
    }
}


// declare view instances
let views = {
	
    WiFi: textBoxView.makeWith({
        text: "WiFi Mode Active",
    }),
    BLE: textBoxView.makeWith({
        text: "BLE Mode Active",
    }),
    Bluetooth: textBoxView.makeWith({
        text: "Bluetooth Mode Active",
    }),
    USB: textBoxView.makeWith({
        text: "USB Device Mode Active",
    }),
    Video: textBoxView.makeWith({
        text: "Video Stream Mode Active",
    }),
    RC: textBoxView.makeWith({
        text: "Romote Contr. Mode Active",
    }),
    Full: textBoxView.makeWith({
        text: "Full 2.4G Mode Active",
    }),
    jammer: submenuView.makeWith({
        header: "NRF24 Serial Jammer",
        items: [
            "WiFi",
            "BLE",
            "Bluetooth",
            "USB Devices",
            "Video Streamers",
            "Remote Controllers",
            "Full 2.4G Jammer",
            "Exit Jammer",
        ],
    }),
};


// jamming mode selection
eventLoop.subscribe(views.jammer.chosen, function (_sub, index, gui, eventLoop, views) {
	
    if (index === 0) {
        gui.viewDispatcher.switchTo(views.WiFi);
		SerialCMD("WiFi");
		
    } else if (index === 1) {
        gui.viewDispatcher.switchTo(views.BLE);
		SerialCMD("BLE");
		
    } else if (index === 2) {
        gui.viewDispatcher.switchTo(views.Bluetooth);
		SerialCMD("Bluetooth");
		
    } else if (index === 3) {
        gui.viewDispatcher.switchTo(views.USB);
		SerialCMD("USB");
		
    } else if (index === 4) {
        gui.viewDispatcher.switchTo(views.Video);
		SerialCMD("Video");
		
    } else if (index === 5) {
        gui.viewDispatcher.switchTo(views.RC);
		SerialCMD("RC");
		
    } else if (index === 6) {
        gui.viewDispatcher.switchTo(views.Full);
    } else if (index === 7) {
        eventLoop.stop();
		SerialCMD("OFF");
    }
}, gui, eventLoop, views);




// jammer main menu
eventLoop.subscribe(gui.viewDispatcher.navigation, function (_sub, _, gui, views, eventLoop) {
	SerialCMD("OFF");
    if (gui.viewDispatcher.currentView === views.jammer) {
        eventLoop.stop();
		
        return;
    }
    gui.viewDispatcher.switchTo(views.jammer);
}, gui, views, eventLoop);



// run jammer UI
gui.viewDispatcher.switchTo(views.jammer);
eventLoop.run();
