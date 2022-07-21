import React, { useContext } from "react";

import { ActivityIndicator, View } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.route";

import { AuthContext } from '../contexts/AuthContext'

function Routes() {
    const { isAuthenticated, loading } = useContext(AuthContext)
    
    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#1d1d2e',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* spinner */}
                <ActivityIndicator size={60} color="#fff" />
            </View>
        )
    }

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes