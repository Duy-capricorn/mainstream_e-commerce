import Footer from '@/layout/Footer';

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <div className="wrapper">
            <section>
                {/* Include shared UI here e.g. a header or sidebar */}

                {children}
            </section>
        </div>
    );
}
