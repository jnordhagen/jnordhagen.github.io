import { Stack, Link } from "@mui/material"


const ContactCard = () => {

  return (
    <Stack direction="row" spacing={5}>
      <Link href="https://www.linkedin.com/in/jakobnordhagen">
        LinkedIn
      </Link>
      <Link href="https://www.github.com/jnordhagen">
        GitHub
      </Link>
      <Link href="mailto:jakobn@stanford.edu">
        Email
      </Link>
    </Stack>
  );
};

export default ContactCard;