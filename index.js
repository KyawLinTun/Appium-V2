const wdio = require("webdriverio");

const assert = require("assert");


// driver.status();
const opts = {
    path: '/wd/hub',
    // path: '/session',
    port: 4723,
     capabilities: {
    //   platformName: "Android",
    //   platformVersion: "12",
    //   deviceName: "Pixel 4a",
    //   app: "C:\eribank.apk",
      // appPackage: "",
    //   appActivity: ".view.TextFields",
    //   automationName: "UiAutomator2"
    platformName:'Android',
    'appium:automationName':'uiautomator2',
    'appium:deviceName':'Pixel 4a',
    'appium:udid':'09201JEC204084',
    'appium:app':'ApiDemos-debug.apk',
    'appium:appPackage':'io.appium.android.apis',
    // 'appium:appPackage':'kama.co.jp.delivery.user.alpha',io.appium.android.apis
    // 'appium:appActivity':'kama.co.jp.delivery.user.alpha.MainActivity',
    'appium:newCommandTimeout':6000,

     }
    
  };
  
  async function main () {
    
    const client = await wdio.remote(opts);
  
    const field = await client.$("//*[@class='android.widget.EditText' and (./preceding-sibling::* | ./following-sibling::*)[./*[@text='Mail Address']]]");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.strictEqual(value,"Hello World!");
  
    await client.deleteSession();
  }
  
  main();

  // describe('Sample', () => {
  //   it('Test', () => {
      
  //   });
  // });