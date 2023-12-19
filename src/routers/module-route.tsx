import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import HtsIndex from "@/pages/hts/index/HtsIndex";
import Investigation from "@/pages/investigations/index/Investigation";
import IPDHistry from "@/pages/medical-encounter-ipd/histry/IPDHistry";
import OpdHistry from "@/pages/medical-encounter/histry/OpdHistry";
import SurgeryIndex from "@/pages/surgery/index/Surgery";
import Vitals from "@/pages/vitals/index/Vitals";
import {
  URLAncFirstIimeOnArt,
  URLAncFollowUp,
  URLAncFollowUpPMTCT,
  URLAncInitialAlreadyOnArt,
  URLAncInitialVisit,
  URLAntenatal,
  URLDashboard,
  URLHts,
  URLIPDHistory,
  URLInvestigation,
  URLOPD,
  URLSurgery,
  URLVitals,
} from "./module-link";
import Antenatal from "@/pages/anc-referrals/index/AncReferrals";
import InitialVisit from "@/pages/anc-referrals/encounter/initialVisit/InitialVisit";
import FollowUp from "@/pages/anc-referrals/encounter/follow-up/FollowUp";
import InitialAlreadyOnART from "@/pages/anc-referrals/encounter/initial-already-on-art/InitialAlreadyOnART";
import FirstTimeOnART from "@/pages/anc-referrals/encounter/first-time-on-art/FirstTimeOnART";
import FollowUpPMTCT from "@/pages/anc-referrals/encounter/follow-up-pmtct/FollowUpPMTCT";

const ModuleRoute = [
  {
    element: <PrivateGuard />,
    children: [
      {
        element: <ModuleSidebar />,
        children: [
          {
            path: URLVitals(),
            element: <Vitals />,
          },
          {
            path: URLHts(),
            element: <HtsIndex />,
          },
          {
            path: URLDashboard(),
            element: <Dashboard />,
          },
          {
            path: URLInvestigation(),
            element: <Investigation />,
          },
          {
            path: URLSurgery(),
            element: <SurgeryIndex />,
          },
          {
            path: URLHts(),
            element: "",
          },
          {
            path: URLOPD(),
            element: <OpdHistry />,
          },
          {
            path: URLIPDHistory(),
            element: <IPDHistry />,
          },
          {
            path: URLAntenatal(),
            element: <Antenatal />,
          },
          {
            path: URLAncInitialVisit(),
            element: <InitialVisit />,
          },
          {
            path: URLAncFollowUp(),
            element: <FollowUp />,
          },
          {
            path: URLAncInitialAlreadyOnArt(),
            element: <InitialAlreadyOnART />,
          },
          {
            path: URLAncFirstIimeOnArt(),
            element: <FirstTimeOnART />,
          },
          {
            path: URLAncFollowUpPMTCT(),
            element: <FollowUpPMTCT />,
          },
          // {
          //   path: URLIPD(),
          //   element: <IPDCreate />,
          // },
        ],
      },
    ],
  },
];

export default ModuleRoute;
