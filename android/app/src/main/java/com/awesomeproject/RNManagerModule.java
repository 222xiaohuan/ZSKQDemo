package com.awesomeproject;

import android.os.Handler;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.kaopiz.kprogresshud.KProgressHUD;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class RNManagerModule extends ReactContextBaseJavaModule{
    private HUDManager hudManager = new HUDManager(getCurrentActivity());

    public RNManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("mac address ",getMac());
        constants.put("token","fasdfas");
        return constants;
    }

    private String getMac()
    {
        String macSerial = null;
        String str = "";

        try
        {
            Process pp = Runtime.getRuntime().exec("cat /sys/class/net/wlan0/address ");
            InputStreamReader ir = new InputStreamReader(pp.getInputStream());
            LineNumberReader input = new LineNumberReader(ir);

            for (; null != str;)
            {
                str = input.readLine();
                if (str != null)
                {
                    macSerial = str.trim();// 去空格
                    break;
                }
            }
        } catch (IOException ex) {
            // 赋予默认值
            ex.printStackTrace();
        }
        return macSerial;
    }



    @Override
    public String getName() {
        return "RNManager";
    }

    @ReactMethod
    public void show(String message,int duration){
        Toast.makeText(getReactApplicationContext(),message,duration).show();

        WritableMap event = Arguments.createMap();
        event.putString("arg1", "arg1");
        event.putString("arg2", "arg2");
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("SEND_EMITTER_TEST", event);

    }

    @ReactMethod
    public void showMessage(String message){
        if(getReactApplicationContext() != null){
            Toast.makeText(getReactApplicationContext(),message,Toast.LENGTH_SHORT).show();

            String eventName = "SEND_EMITTER_TEST";
            WritableMap eventMap = Arguments.createMap();
            eventMap.putString("arg1", "111111111-----");
            eventMap.putString("arg2", "2222222-------");

            sendEvent(eventName,eventMap);
        }
    }

    private void sendEvent(String eventName, WritableMap eventMap){
        EventSender eventSender = new EventSender(getReactApplicationContext());
        eventSender.sendEvent(eventName,eventMap);
    }

    /**
     * RNManager.showIndeterminate();
     */
    @ReactMethod
    public void showIndeterminate(){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showIndeterminate();
    }

    /**
     * RNManager.showLabelIndeterminate("please wait hh");
     * @param labelText  弹出框显示的文字提示
     */
    @ReactMethod
    public void showLabelIndeterminate(String labelText){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showLabelIndeterminate(labelText);
    }

    /**
     * RNManager.showDetailIndeterminate("please wait hh", "Downloading data");
     * @param labelText  提示的标题
     * @param detailsText  提示的详细信息
     */
    @ReactMethod
    public void showDetailIndeterminate(String labelText,String detailsText){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showDetailIndeterminate(labelText,detailsText);
    }

    /**
     * RNManager.showDeterminate("please wait hh");
     * @param labelText
     */
    @ReactMethod
    public void showDeterminate(String labelText){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showDeterminate(labelText);
    }

    /**
     * RNManager.showAnnularDeterminate("please wait hh","Downloading data");
     * @param labelText
     * @param detailsLabel
     */
    @ReactMethod
    public void showAnnularDeterminate(String labelText, String detailsLabel){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showAnnularDeterminate(labelText,detailsLabel);
    }

    /**
     * RNManager.showBarDeterminate("please wait hh");
     * @param labelText
     */
    @ReactMethod
    public void showBarDeterminate(String labelText){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showBarDeterminate(labelText);
    }

    /**
     * RNManager.showCustomView("please wait hh");
     * @param labelText
     */
    @ReactMethod
    public void showCustomView(String labelText){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showCustomView(labelText);
    }

    /**
     *   RNManager.showDimBackgroud(0.5);
     * @param dimAmount
     */
    @ReactMethod
    public void showDimBackgroud(float dimAmount){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showDimBackgroud(dimAmount);
    }

    /**
     * RNManager.showCustomColorAnimate(2);
     * @param animSpeed
     */
    @ReactMethod
    public void showCustomColorAnimate(int animSpeed){
        HUDManager hudManager = new HUDManager(getCurrentActivity());
        hudManager.showCustomColorAnimate(animSpeed);
    }

}
