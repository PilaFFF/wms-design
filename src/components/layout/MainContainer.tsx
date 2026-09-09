import Header from '../Header/Header';

export default function MainContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-[#f3f3f3]">
            <Header />
            {children}
        </div>
    );
}
