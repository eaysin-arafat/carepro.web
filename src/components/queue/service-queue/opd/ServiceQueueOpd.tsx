import Badge from "@/components/core/badge/Badge";
import BreadcrumbItem from "@/components/core/breadcumb/BreadcrumbItem";
import GlobalBreadcrumb from "@/components/core/breadcumb/Breadcumb";
import useWindowWidth from "@/hooks/useWindow";
import { URLServiceQueue } from "@/routers/queue-routes";
import ServiceQueueFilters from "../ServiceQueueFilters";

function ServiceQueueOpd() {
  const w1100 = useWindowWidth(1100);
  return (
    <div className={`${w1100 && "mt-12"}`}>
      <GlobalBreadcrumb className="bg-whiteBgColor p-4 border rounded-md mb-3">
        <>
          <BreadcrumbItem
            href={URLServiceQueue()}
            text="Service Queue"
            noIcon
            active
          />
          <BreadcrumbItem text="Opd" />
        </>
      </GlobalBreadcrumb>

      <h1 className="text-2xl mb-4 flex items-center gap-3">
        OPD
        <Badge type="circle" value={5} />
      </h1>
      <ServiceQueueFilters withoutTitle />

      <div className="">Table Content</div>
    </div>
  );
}

export default ServiceQueueOpd;
