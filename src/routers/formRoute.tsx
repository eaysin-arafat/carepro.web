import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import IPDCreate from "@/pages/medical-encounter-ipd/create/Create";
import CreateMedicalEncounter from "@/pages/medical-encounter/create/Create";
import { URLIPD } from "./module-link";
import InitialVisitEncounter from "@/pages/anc-referrals/encounter/initialVisit/InitialVisitEncounter";
import FollowUpEncounter from "@/pages/anc-referrals/encounter/follow-up/FollowUpEncounter";
import InitialAlreadyOnARTEncounter from "@/pages/anc-referrals/encounter/initial-already-on-art/InitialAlreadyOnARTEncounter";
import FirstTimeOnARTEncounter from "@/pages/anc-referrals/encounter/first-time-on-art/FirstTimeOnARTEncounter";
import FollowUpPMTCTEncounter from "@/pages/anc-referrals/encounter/follow-up-pmtct/FollowUpPMTCTEncounter";

// routes for facility
export const URLOpdCreate = (): string => "/medical-encounters/create";
export const URLAncInitialVisitCreate = (): string =>
  "/anc-initial-visit/anc-initial-visit-encounter";
export const URLAncFollowUpCreate = (): string =>
  "/anc-follow-up/anc-follow-up-encounter";
export const URLAncInitialAlreadyOnARTCreate = (): string =>
  "/anc-initial-already-on-art/anc-initial-already-on-art-encounter";
export const URLAncFirstTimeOnARTCarete = (): string =>
  "/anc-1st-time-on-art/anc-1st-time-on-art-encounter";
export const URLAncFollowUpPMTCTCreate = (): string =>
  "/anc-follow-up-pmtct/anc-follow-up-pmtct-encounter";

// routers for facility
const FormRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: URLOpdCreate(),
        element: <CreateMedicalEncounter />,
      },
      {
        path: URLAncInitialVisitCreate(),
        element: <InitialVisitEncounter />,
      },
      { path: URLAncFollowUpCreate(), element: <FollowUpEncounter /> },
      {
        path: URLAncInitialAlreadyOnARTCreate(),
        element: <InitialAlreadyOnARTEncounter />,
      },
      {
        path: URLAncFirstTimeOnARTCarete(),
        element: <FirstTimeOnARTEncounter />,
      },
      {
        path: URLAncFollowUpPMTCTCreate(),
        element: <FollowUpPMTCTEncounter />,
      },
      {
        path: URLIPD(),
        element: <IPDCreate />,
      },
    ],
  },
];

export default FormRouter;
