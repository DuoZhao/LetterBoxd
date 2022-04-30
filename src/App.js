import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.min.css';
import './vendors/fontawesome-free-6.1.0-web/css/all.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movie from "./components/HuskyBoxd";

import HomeScreen from "./components/HuskyBoxd/HomeScreen";
import ProfileScreen from "./components/HuskyBoxd/ProfileScreen/index";
import EditProfileScreen from "./components/HuskyBoxd/EditProfileScreen/index";
import ProfileStat from "./components/HuskyBoxd/ProfileScreen/ProfileStat.js";
import ProfileFilmsList from "./components/HuskyBoxd/ProfileScreen/FilmList.js";
import StoresStreaming from "./components/HuskyBoxd/EditProfileScreen/StoresStreaming.js";
import ImportExportComponent from "./components/HuskyBoxd/EditProfileScreen/ImportExportComponent.js";
import SearchScreen from "./components/HuskyBoxd/SearchScreen/index";
import LoginScreen from "./components/HuskyBoxd/LoginScreen/LoginScreen";
import MovieDetailScreen from "./components/HuskyBoxd/MovieDetailScreen/MovieDetailScreen";
import PrivacyScreen from "./components/HuskyBoxd/PopularList/privacy";
import {ProfileProvider} from "./components/HuskyBoxd/contexts/profile-context";
import SecureRoute from "./components/HuskyBoxd/secures/secure-route";

function App() {
    return (
        <ProfileProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/huskyboxd" element={<Movie/>}>
                    <Route path="profile" element={<ProfileScreen/>}/>
                    <Route path="login" element={<LoginScreen/>}/>
                    <Route path="detail" element={<MovieDetailScreen/>}/>
                    <Route path="detail/:movieId" element={<MovieDetailScreen/>}/>
                    <Route path="editprofile" element={<EditProfileScreen/>}/>
                    <Route path="profile-films" element={<ProfileFilmsList/>}/>
                    <Route path="stores-streaming" element={<StoresStreaming/>}/>
                    <Route path="import-export" element={<ImportExportComponent/>}/>
                    <Route path="stat" element={<ProfileStat/>}/>
                    <Route path="privacy" element={<PrivacyScreen/>}/>
                    <Route path="search" element={<SearchScreen/>}/>
                    <Route path="search/:movieSearch" element={<SearchScreen/>}/>
                    <Route path="profile/:userId" element={<ProfileScreen/>}/>
                    <Route path="home" element={
                        <SecureRoute>
                            <HomeScreen/>
                        </SecureRoute>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
        </ProfileProvider>
    );
}
export default App;
