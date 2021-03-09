

$.connection.hub.url = 'http://127.0.0.1:8889/signalr';
var hubProxy = $.connection.serverHub;

hubProxy.on("Receviecommand", function () {
    alert("Receviecommand");
        });  
// Start the connection.
$.connection.hub.start()
    .done(function () {
        hubProxy.invoke('send');

        
    })
    .fail(function () {
        alert("failed in connecting to the signalr server");
    })