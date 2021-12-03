import Button from "../shared/components/Button";

const DeleteButton = ({disabled, onClick}) => (<Button type={"submit"} disabled={disabled} text={"Delete"}
                                                       onClick={onClick}>
</Button>);

export default DeleteButton