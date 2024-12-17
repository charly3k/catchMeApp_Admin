import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen bg-lightWhite w-screen">
      {/* Fixed Sidebar */}
      <aside className="bg-white border border-grey fixed top-0 left-0 h-screen w-[15.625rem]">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex justify-center ">
        <div className="w-full max-w-[900px]">{children}</div>
      </div>
    </section>
  );
}
