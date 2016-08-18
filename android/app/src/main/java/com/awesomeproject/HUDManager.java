package com.awesomeproject;

import android.content.Context;
import android.os.Handler;
import android.widget.ImageView;

import com.facebook.react.bridge.ReactMethod;
import com.kaopiz.kprogresshud.KProgressHUD;

/**
 * Created by emily on 5/19/16.
 */
public class HUDManager {
    private KProgressHUD hud;
    private static HUDManager hudManager = null;
    private static Context context = null;

    public HUDManager(Context ctx){
        context = ctx;
    }

    public static HUDManager getInstance(Context ctx){
        if(null==hudManager){
            hudManager = new HUDManager(ctx);
        }
        return hudManager;
    }

    public void showIndeterminate(){
        hud = KProgressHUD.create(context).setStyle(KProgressHUD.Style.SPIN_INDETERMINATE);
        hud.show();
        scheduleDismiss();
    }

    public void showLabelIndeterminate(String labelText){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.SPIN_INDETERMINATE)
                .setLabel(labelText)
                .setCancellable(true);
        hud.show();
        scheduleDismiss();
    }

    public void showDetailIndeterminate(String labelText, String detailsLabel){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.SPIN_INDETERMINATE)
                .setLabel(labelText)
                .setDetailsLabel(detailsLabel);
        hud.show();
        scheduleDismiss();
    }

    public void showDeterminate(String labelText){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.PIE_DETERMINATE)
                .setLabel(labelText);
        hud.show();
        simulateProgressUpdate();
    }

    public void showAnnularDeterminate(String labelText, String detailsLabel){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.ANNULAR_DETERMINATE)
                .setLabel(labelText)
                .setDetailsLabel(detailsLabel);
        hud.show();
        simulateProgressUpdate();
    }

    public void showBarDeterminate(String labelText){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.BAR_DETERMINATE)
                .setLabel(labelText);
        hud.show();
        simulateProgressUpdate();
    }

    public void showCustomView(String labelText){
        ImageView imageView = new ImageView(context);
        imageView.setImageResource(R.mipmap.ic_launcher);
        hud = KProgressHUD.create(context)
                .setCustomView(imageView)
                .setLabel(labelText);
        hud.show();
        scheduleDismiss();
    }

    public void showDimBackgroud(float dimAmount){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.SPIN_INDETERMINATE)
                .setDimAmount(0.5f);
        hud.show();
        scheduleDismiss();
    }

    public void showCustomColorAnimate(int animSpeed){
        hud = KProgressHUD.create(context)
                .setStyle(KProgressHUD.Style.SPIN_INDETERMINATE)
                .setWindowColor(context.getResources().getColor(R.color.colorPrimary))
                .setAnimationSpeed(animSpeed);
        hud.show();
        scheduleDismiss();
    }

    public void simulateProgressUpdate() {
        hud.setMaxProgress(100);
        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            int currentProgress;
            @Override
            public void run() {
                currentProgress += 1;
                hud.setProgress(currentProgress);
                if (currentProgress == 80) {
                    hud.setLabel("Almost finish...");
                }
                if (currentProgress < 100) {
                    handler.postDelayed(this, 50);
                }
            }
        }, 100);
    }

    public void scheduleDismiss() {
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                hud.dismiss();
            }
        }, 2000);
    }

}


