import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={ classNames('app', { hovered: true }, [theme]) }>
            <button onClick={toggleTheme}>Тема</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
