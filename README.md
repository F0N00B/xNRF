<div align="center">

  # ☢️ xNRF 
###
![IMG_2068](https://github.com/user-attachments/assets/3d410abd-1113-4b95-bcba-5ea65bdcd4c3)
###
#### 🐬 FlipperZero multiple (x3) NRF24 - ESP32 Serial Jammer 🐬
##### 🔇 WiFi, BLE, Bluetooth, Video Streamers, Remotly Controlled devices, Full 2.4Ghz spectrum 🔇
###
&nbsp;
###
</div>


## 💡 Hardware used
<table>
<tbody>
<tr><td>x1</td><td>FlipperZero</td></tr>
<tr><td>x1</td><td>ESP32 Wroom</td></tr>
<tr><td>x1-3</td><td>NRF24</td></tr>
</tbody>
</table>

###
&nbsp;
###

## 🛠 Wiring Diagram & Pinouts

![diagram](https://github.com/user-attachments/assets/024bed2b-0849-4aa5-bb4d-82bf2a025141)


<table>
<thead><th>NRF24</th><th>ESP32 (GPIO)</th><th> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </th><th>ESP32 (GPIO)</th><th>Flipper Zero</th></thead>
<tbody>
<tr><td>VCC</td><td>3.3V</td><td></td><td>VIN (V5)</td><td>V5 - GPIO 1 </td></tr>
<tr><td>GND</td><td>GND</td><td></td><td>GND</td><td>GND - GPIO 18 </td></tr>
<tr><td>SCK</td><td>GPIO 18</td><td></td><td>TX0</td><td>RX - GPIO 14 </td></tr>
<tr><td>MISO</td><td>GPIO 19</td><td></td><td>RX0</td><td>RX - GPIO 13 </td></tr>
<tr><td>MOSI</td><td>GPIO 23</td><td></td><td>EN (RST)</td><td>C0 - GPIO 16 </td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><td>NRF #1</td><td></td></tr>
<tr><td>CE</td><td>GPIO 5</td></tr>
<tr><td>CSN</td><td>GPIO 17</td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><td>NRF #2</td><td></td></tr>
<tr><td>CE</td><td>GPIO 16</td></tr>
<tr><td>CSN</td><td>GPIO 4</td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><td>NRF #3</td><td></td></tr>
<tr><td>CE</td><td>GPIO 15</td></tr>
<tr><td>CSN</td><td>GPIO 2</td></tr>
  
</tbody>
</table>

* IRQ is Not connected
###
&nbsp;
###



## 🚀 Building Steps

##### 1. Build your hardware
##### 2. Flash your ESP32 Wroom using the [WebFlasher](https://f0n00b.github.io/xNRF/WebFlasher/) / from Source.
##### 3. Download the FlipperZero App (xNRF.js) and place it in "SD Card/apps/Scripts"
##### 4. Connect your built and firmware flashed device to your Flipper Zero device
##### 5. Turn v5 ON your FlipperZero GPIO
##### 6. Start xNRF.js app
#### 7. Jam the Planet ☠️
###
&nbsp;
###
###
&nbsp;
###
###
&nbsp;
###
  
###### made by x01r.  
###### For educational purposes only, JAMMING IS ILLEGAL!
###### Do not ask me to implement new functions in this code and do not ask me for help.
