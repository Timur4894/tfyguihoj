import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./screens/notAuthorizedStak/Home";
import Contact from "./screens/notAuthorizedStak/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import FrequentlyAskedQuestions from "./screens/notAuthorizedStak/FrequentlyAskedQuestions";
import LoginScreen from "./screens/auth/LoginScreen";
import ForgotPassword from "./screens/auth/ForgetPasswordScreen";
import CreateAccountScreen from "./screens/auth/CreateAccountScreen";
import CabinetScreen from "./screens/authorizedStak/CabinetScreen";
import ConfirmPay from "./screens/confirmPay";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import i18n from "./i18n";
import AdminPanel from "./screens/adminAuth/adminPanel";
import LogInAsAdmin from "./screens/adminAuth/logInAsAdmin";
import {AdminAuthProvider, useAdminAuth} from "./context/AdminAuthContext";
import {RefProvider} from "./context/RefContext";
import ScrollToTop from "./tools/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Company from "./screens/notAuthorizedStak/Company";
import Partners from "./screens/notAuthorizedStak/Partners";
import Investments from "./screens/notAuthorizedStak/Investments";
import AuthorizedLayout from "./components/AuthorizedLayout";
import BalanceScreen from "./screens/authorizedStak/BalanceScreen";
import OpenDepScreen from "./screens/authorizedStak/OpenDepScreen";
import ReferralProgram from "./screens/authorizedStak/ReferralProgram";
import SupportForm from "./screens/authorizedStak/SupportForm";
import WalletSettings from "./screens/authorizedStak/WalletSettings";
import MyDepsScreen from "./screens/authorizedStak/MyDepsScreen";
import ProfHeader from "./components/ProfHeader";
import ChangePasswordScreen from "./screens/auth/ChangePasswordScreen";
import PrivacyPolicyScreen from "./screens/PPScreen";
import CooperationTermsScreen from "./screens/CooperationTermsScreen";
import HeaderMobile from "./components/HeaderMobile";

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
    // const isAuthenticated = true
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const ProtectedAdminRoute = ({ element }) => {
    const { isAdminAuthenticated } = useAdminAuth();
    return isAdminAuthenticated ? element : <Navigate to="/logInAsAdmin" replace />;
};


const App = () => {
    return (
        <AdminAuthProvider>
            <AuthProvider>
                <RefProvider>
                    <Router>
                        <AppContent />
                    </Router>
                </RefProvider>
            </AuthProvider>
        </AdminAuthProvider>
    );
};

const AppContent = () => {
    const location = useLocation();

    const hideHeaderFooterRoutes = ["/confirmPay", "/adminPanel", "/logInAsAdmin", "/test", '/cabinetscreen', '/balance', '/opendep', '/mydeps', '/refprogram', '/support', '/wallets'];
    const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <div style={appContainerStyle}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                rel="stylesheet"/>

            {/* Show Header unless explicitly hidden */}
            {!shouldHideHeaderFooter && (
                isMobile ? <HeaderMobile /> : <Header />
            )}

            <main style={mainContentStyle}>
                <ScrollToTop/>
                <Routes>
                    {/* Non-auth stack */}
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/frequentlyAskedQuestions" element={<FrequentlyAskedQuestions />} />*/}
                    <Route path="/aboutcompany" element={<Company/>}/>
                    <Route path="/partners" element={<Partners/>}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FrequentlyAskedQuestions />} />
                    <Route path="/investments" element={<Investments />} />
                    <Route path="/privacypolicyscreen" element={<PrivacyPolicyScreen />} />
                    <Route path="/cooperationtermsscreen" element={<CooperationTermsScreen />} />

                    {/*/!* Login stack *!/*/}
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/createaccountscreen" element={
                            <CreateAccountScreen />
                        } />
                    {/*/!* Auth stack *!/*/}
                        <Route
                            path="/cabinetscreen"
                            element={
                                <ProtectedRoute
                                    element={
                                        <AuthorizedLayout>
                                            <ProfHeader/>
                                            <CabinetScreen />
                                        </AuthorizedLayout>
                                    }
                                />
                            }
                        />
                    {/*<Route*/}
                    {/*    path="/changepassword"*/}
                    {/*    element={*/}
                    {/*        <ProtectedRoute*/}
                    {/*            element={*/}
                    {/*                <AuthorizedLayout>*/}
                    {/*                    <ProfHeader/>*/}
                    {/*                    <ChangePasswordScreen />*/}
                    {/*                </AuthorizedLayout>*/}
                    {/*            }*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*/>*/}
                    <Route path="/changepassword" element={<ChangePasswordScreen />} />
                    <Route
                        path="/balance"
                        element={
                            <ProtectedRoute
                                element={
                                    <AuthorizedLayout>
                                        <ProfHeader/>
                                        <BalanceScreen />
                                    </AuthorizedLayout>
                                }
                            />
                        }
                    />
                    <Route
                        path="/opendep"
                        element={
                            <ProtectedRoute
                                element={
                                    <AuthorizedLayout>
                                        <ProfHeader/>
                                        <OpenDepScreen />
                                    </AuthorizedLayout>
                                }
                            />
                        }
                    />
                    <Route
                        path="/mydeps"
                        element={
                            <ProtectedRoute
                                element={
                                    <AuthorizedLayout>
                                        <ProfHeader/>
                                        <MyDepsScreen />
                                    </AuthorizedLayout>
                                }
                            />
                        }
                    />
                    <Route
                        path="/refprogram"
                        element={
                            <ProtectedRoute
                                element={
                                    <AuthorizedLayout>
                                        <ProfHeader/>
                                        <ReferralProgram />
                                    </AuthorizedLayout>
                                }
                            />
                        }
                    />
                    <Route
                        path="/support"
                        element={
                            <ProtectedRoute
                                element={
                                    <AuthorizedLayout>
                                        <ProfHeader/>
                                        <SupportForm />
                                    </AuthorizedLayout>
                                }
                            />
                        }
                    />
                    <Route
                        path="/wallets"
                        element={
                            <ProtectedRoute
                                element={
                                    <AuthorizedLayout>
                                        <ProfHeader/>
                                        <WalletSettings />
                                    </AuthorizedLayout>
                                }
                            />
                        }
                    />

                    <Route path="/confirmPay" element={<ProtectedRoute element={<ConfirmPay />} />} />

                    {/*<Route path="/logInAsAdmin" element={<LogInAsAdmin />} />*/}
                    {/*<Route*/}
                    {/*    path="/adminPanel"*/}
                    {/*    element={<ProtectedAdminRoute element={<AdminPanel />} />}*/}
                    {/*/>*/}
                </Routes>
            </main>
            {/* Show Footer unless explicitly hidden */}
            {!shouldHideHeaderFooter && <Footer/>}
        </div>
    );
};

const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // maxWidth: "1000px",
};

const mainContentStyle = {
    flex: 1,
};

export default App;
