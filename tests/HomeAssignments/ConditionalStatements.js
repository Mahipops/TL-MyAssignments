function launchBrowser(browserName)
{
    if(browserName=="chrome")
        console.log('launch chrome')
    else
        console.log('browser is not available')
}
function runTests(testType)
{
    switch(testType)
    {
        case 'smoke':
            console.log("Smoke test")
            break;
        case 'sanity':
            console.log("Sanity test")
            break;
        case 'regression':
            console.log("Regression test")
            break;
        default :
            console.log("Smoke test")

    }
}

launchBrowser("chrome");
runTests("sanity")