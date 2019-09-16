# Trade Tosser Sockets

 
Trade Tosser Sockets uses [socket-io][socket-io] to provide our event signals that are derived from segments of complex models in real-time.
 

# Requirements!

  - A Trade Tosser API key which you can obtain at https://tradetosser.com/settings

  
### Installation

TT Sockets requires [socket-io](https://socket.io/).

### Usage
Javascript example:
```
   var socket = io('https://tradetosser.com:5000?token=YOUR_API_KEY');
     // Connection succeeded
socket.on('connect', () => {
	
});
  // Connection lost
socket.on('disconnect', () => {
 
});

  socket.on('EURUSD', function(data) {
    if(data.text == "CLOSE_DC"){ //If our data provider goes offline
    
    }else if(data.text == "CLOSE"){ //If the trade we are working with closes
    
    }else if(data.text == "OPEN"){ //If the trade signal is a new trade
    
     }
   })
 ``` 
 
    Replace with pair you want to listen to  = Pair code written in bold
   - **EURUSD**	Euro/US Dollar
   - **BTCUSD**	Bitcoin/US Dollar
   - **USDJPY**	US Dollar/Japanese Yen
   - **GBPUSD**	British Pound/US Dollar
   - **AUDUSD**	Australian Dollar/US Dollar
   - **USDCAD**	US Dollar/Canadian Dollar
   - **USDCHF**	US Dollar/Swiss Franc
   - **EURGBP**	Euro/British Pound
   - **NZDUSD**	New Zealand Dollar/US Dollar
   - **AUDJPY**	Australian Dollar/Japanese Yen
   - **GBPJPY**	British Pound/Japanese Yen
   - **GBPAUD**	British Pound/Australian Dollar
   - **AUDNZD**	Australian Dollar/New Zealand Dollar
   - **USDMXN**	US Dollar/Mexican Peso
   - **ETHUSD**	Ethereum/US Dollar
   - **EURCAD**	Euro/Canadian Dollar
   - **EURJPY**	Euro/Japanese Yen
   - **USDTRY**	US Dollar/Turkish Lira
   - **USDZAR**	US Dollar/South African Rand
   - **XAUUSD** Gold/US Dollar
 
### Data object
  - pair | Pair of the trade
  - type | If it's SHORT or LONG
  - price | current price of the trade [start price if we are opening, close price if the trade is closing]
  - unitSize | unit size bought from our algorithm
  - timestamp
  - stopPrice | Stop price for the trade
  - comment  | Remarks for the trade
  - alert_id | Unique identifier for the trade
     
 

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

Different events:


On Manual Trade Close:
Text = CLOSE
Comment = Trade Manually Stopped
Type = SHORT || LONG


Manual Trade Open:
Text = OPEN
Comment = Trade Manually Open
Type = SHORT || LONG

Trade Open:
Text = OPEN
Comment = Trade Manually Open
Type = SHORT || LONG


Stop Price Reached:
Text = CLOSE
Comment = Stop Price Reached
Type = SHORT || LONG

Holding Period Reached:
Text = CLOSE
Comment = Holding Period Reached
Type = SHORT || LONG


Server crash:
Text = CLOSE_DC
Comment = Data provider crashed
Type = SHORT || LONG


 
   
   [socket-io]: <https://socket.io/docs/>
