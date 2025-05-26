<div align="center">
  
![xnrf](https://github.com/user-attachments/assets/62c7c6a0-44fa-45d8-a7c8-347fbcda6dd6)
<h1>xNRF </h1>

###
![IMG_2068](https://github.com/user-attachments/assets/f2609e4c-0e5a-449c-b02f-a71efac246d1)




###
<h4> 🐬 FlipperZero multiple (x3) NRF24 - ESP32 Serial Jammer 🐬 </h4>
<h5> 🔇 WiFi, NEW CHANNEL SCAN!! BLE, Bluetooth, Video Streamers, Remotly Controlled devices, Full 2.4Ghz spectrum 🔇</h5>
###
&nbsp;

![f0_xnrf](https://github.com/user-attachments/assets/a894a59c-9a4a-473d-974b-00ee1378100a)
###
&nbsp;
###

</div>



## 💡 Hardware used
<table>
<tbody>
<tr><td>x1</td><td>FlipperZero</td></tr>
<tr><td>x1</td><td>ESP32 Wroom</td></tr>
<tr><td>x1</td><td>0.96 OLED Display</td></tr>
<tr><td>x1</td><td>Pixel Led</td></tr>
<tr><td>x1-3</td><td>NRF24</td></tr>
</tbody>
</table>

###
&nbsp;
###

## 🛠 Wiring Diagram & Pinouts

![DIAGRAM](https://github.com/user-attachments/assets/10ee8470-2820-4744-a197-4f7944d21286)


<table>
<thead><th>NRF24</th><th>ESP32 (GPIO)</th><th> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </th><th>ESP32 (GPIO)</th><th>Flipper Zero</th></thead>
<tbody>
<tr><td>VCC</td><td>3.3V</td><td></td><td>VIN (V5)</td><td>V5 - GPIO 1 </td></tr>
<tr><td>GND</td><td>GND</td><td></td><td>GND</td><td>GND - GPIO 18 </td></tr>
<tr><td>SCK</td><td>GPIO 18</td><td></td><td>TX0</td><td>RX - GPIO 14 </td></tr>
<tr><td>MISO</td><td>GPIO 19</td><td></td><td>RX0</td><td>RX - GPIO 13 </td></tr>
<tr><td>MOSI</td><td>GPIO 23</td><td></td><td>EN (RST)</td><td>C0 - GPIO 16 </td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><th>NRF #1</th><td></td></tr>
<tr><td>CE</td><td>GPIO 5</td></tr>
<tr><td>CSN</td><td>GPIO 17</td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><th>NRF #2</th><td></td></tr>
<tr><td>CE</td><td>GPIO 16</td></tr>
<tr><td>CSN</td><td>GPIO 4</td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><th>NRF #3</th><td></td></tr>
<tr><td>CE</td><td>GPIO 15</td></tr>
<tr><td>CSN</td><td>GPIO 2</td></tr>
  
</tbody>
</table>

* IRQ is Not connected
###
&nbsp;
###



## 🚀 Building Steps

<h5> 1. Build your hardware </h5>
<h5> 2. Flash your ESP32 Wroom using the <a href="https://f0n00b.github.io/xNRF/WebFlasher/">WebFlasher</a> / from Source. </h5>
<h5> 3. Download the FlipperZero App (xNRF.js) and place it in "SD Card/apps/Scripts" </h5>
<h5> 4. Connect your built and firmware flashed device to your Flipper Zero device </h5>
<h5> 5. Turn v5 ON your FlipperZero GPIO </h5>
<h5> 6. Start xNRF.js app </h5>
<h3> 7. Jam the Planet ☠️ </h3>

<br />
<br />
<br />
<br />
<br />
<br />
  
###### made by x01r. Special Thanks To PM63DAKKA! 
###### For educational purposes only, JAMMING IS ILLEGAL!
###### Do not ask me to implement new functions in this code and do not ask me for help.
