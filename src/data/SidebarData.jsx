import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const sidebarItems = [
    {
        icon: <FitnessCenterIcon />,
        text: "Exercises"
    },
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <InboxIcon />,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <SaveAltIcon />,
        text: "Save Items"
    },
    {
        icon: <GroupIcon />,
        text: "People & Groups"
    },
    {
        icon: <MoreHorizIcon />,
        text: "More"
    }
]