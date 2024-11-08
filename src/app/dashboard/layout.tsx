import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 min-h-screen bg-lightWhite flex  w-screen">
      {/* Include shared UI here e.g. a header or sidebar */}

      <aside className=" bg-white mr-10">
        <Sidebar />
      </aside>

      <section className="w-full">
        <div className="w-full">{children}</div>
      </section>
    </section>
  );
}
