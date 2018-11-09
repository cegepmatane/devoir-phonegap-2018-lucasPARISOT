package ca.qc.cgmatane.informatique.myapplication;

import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;

public class ActivitePrincipale extends DroidGap { /* LE BON NOM DE CLASSE!!!!! */
    /** The view to show the ad. */


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");

    }
}
