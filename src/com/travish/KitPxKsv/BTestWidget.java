package com.travish.KitPxKsv.ux;

import javax.baja.naming.BOrd;
import javax.baja.nre.annotations.NiagaraType;
import javax.baja.sys.BSingleton;
import javax.baja.sys.Context;
import javax.baja.sys.Sys;
import javax.baja.sys.Type;
import javax.baja.web.BIFormFactorMax;
import javax.baja.web.js.BIJavaScript;
import javax.baja.web.js.JsInfo;

@NiagaraType
public final class BTestWidget extends BSingleton implements BIJavaScript, BIFormFactorMax {
    public static final BTestWidget INSTANCE = new BTestWidget();
    public static final Type TYPE = Sys.loadType(BTestWidget.class);
    private static final JsInfo jsInfo;

    private BTestWidget() {
    }

    public Type getType() {
        return TYPE;
    }

    public JsInfo getJsInfo(Context cx) {
        return jsInfo;
    }

    static {
        jsInfo = JsInfo.make(BOrd.make("module://KitPxKsv/rc/TestWidget.js"));
    }
}