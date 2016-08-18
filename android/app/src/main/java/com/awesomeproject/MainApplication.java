package com.awesomeproject;

/**
 * Created by emily on 8/1/16.
 */
import android.app.Application;

import com.ReactCamera.RNCameraViewPackage;
import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.yiyang.reactnativebaidumap.ReactMapPackage;
import com.github.reactNativeMPAndroidChart.MPAndroidChartPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new BarcodeScannerPackage(),
                    new RNDeviceInfo(),
                    new ReactMapPackage(),
                    new ReactNativeI18n(),
                    new RCTCameraPackage(),
                    new RNPackage(),
                    new RNCameraViewPackage(),
                    new MPAndroidChartPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
