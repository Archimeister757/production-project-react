import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;

    const [ collapsed, setCollapsed ] = useState(false);

    const onCollapsed = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed }, [className])}>
            <button onClick={onCollapsed}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classNames(cls.lang, {}, [className])}/>
            </div>
        </div>
 );
}