import { Navigate, Route, Routes } from "react-router-dom"
import { WeatherDetail, WeatherGrid } from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="weather" element={<WeatherGrid />} />
                <Route path="weatherdetail" element={<WeatherDetail />} />

                <Route path="/" element={<Navigate to="/weather" />} />
            </Routes>
        </>
    )
}
