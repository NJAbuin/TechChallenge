// initialize a date holding time of last alert and an error counter that gets cleared after every minute
let lastAlertDate = new Date(),
    errorsLastMinute = 0,
    alertInterval = setInterval(()=>errorsLastMinute=0, 60000)

//modify existing logError function to count errors sent    
function logError(err){
    logToFile(err)
    errorsLastMinute =+ 1

    if(errorsLastMinute>=10 && new Date()-lastAlertDate < 60000){ //email is sent only if none was sent in the last minute and at least 10 errors registered
        lastAlertDate = new Date()
        sendEmail()
    }
}
