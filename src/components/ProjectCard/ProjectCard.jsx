import "./ProjectCard.css"
import { useProjectCardCreateStyle } from "./createProjectCardStyle.js"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function ProjectCard({ projectTitle, projectSubHeader, projectImg, projectContent, visitLink, codeLink }) {
    const classes = useProjectCardCreateStyle()
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    return (
        <Card sx={{ maxWidth: 400 }} elevation={3} className={classes.projectContainer}>
            <CardHeader
                className={classes.projectCardHeader}
                title={projectTitle}
                subheader={<Typography className={classes.subColor}>{projectSubHeader}</Typography>}
            >
            </CardHeader>
            <CardMedia
                component="img"
                height="194"
                image={projectImg}
                alt="Paella dish"
            />
            <CardContent className={classes.projectCardContent}>
                <Typography variant="body1">
                    {projectContent}
                </Typography>
            </CardContent>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Stack spacing={0} direction="row"
            >
                <Button variant="contained" target="_blank" href={visitLink} className={classes.visitButton}>Visit</Button>
                <Button variant="contained" target="_blank" href={codeLink} className={classes.codeButton}>Code</Button>
            </Stack>
        </Card>
    )
}

export default ProjectCard





























// function ProjectCard() {
//     return (
//             <div className="card_container">
//                 <div className="front_card">
//                     <div className="image1"></div>
//                     <h3 className="card_title">NotesyFy</h3>
//                 </div>
//                 <div className="back_card">
//                     <p>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
//                     </p>
//                 </div>
//                 <div className="card_background"></div>
//             </div>
//     )
// }

// export default ProjectCard