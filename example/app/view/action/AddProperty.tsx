import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tune from "@material-ui/icons/Tune";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Field} from "../../../../src/definition/model/Field";
import {getTypeDetails} from "../../definition/FieldTypesDetails";
import {PropertyUpdate, PropertyValueChange} from "../../editor/ModelUpdater";
import {FormEditor} from "../../editor/FormEditor";
import {Property} from "../../definition/Property";

export interface AddPropertyProps {
    field: Field;
    onAdd: (update: PropertyUpdate) => void;
}

export const AddProperty: React.FunctionComponent<AddPropertyProps> = ({field, onAdd}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => setAnchorEl(null);
    const handleAdd = (property: Property) => {
        handleClose();
        onAdd(new PropertyValueChange(property.key, property.getDefaultValue(FormEditor.MODEL!)));
    };
    let typeDetails = getTypeDetails(field.type);
    return (
        <>
            <IconButton className="FieldEditorView-delete"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)}>
                <Tune/>
            </IconButton>
            <Menu id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                {typeDetails.properties
                    .filter(property => !typeDetails.mandatory || !typeDetails.mandatory.includes(property))
                    .map(property => (
                        <MenuItem onClick={() => handleAdd(property)}
                                  key={property.key}
                                  autoFocus={false}
                                  disabled={field[property.key] !== undefined}>Add {property.label}</MenuItem>
                    ))}
            </Menu>
        </>
    );
}
