package com.example;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.Nonnull;

public class DeviceInfoPackage implements ReactPackage {

    /**
     * method for add native module to list of native modules
     * @param reactContext : context of DeviceInfoPackage
     * @return
     */
    @Nonnull
    @Override
    public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new DeviceInfoModule(reactContext));
        return modules;
    }

    /**
     * Autogenerated method form react package
     * @param reactContext : context of DeviceInfoPackage
     * @return
     */
    @Nonnull
    @Override
    public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
