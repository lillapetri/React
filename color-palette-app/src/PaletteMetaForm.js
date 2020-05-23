import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            open: false,
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };
    render() {
        const {newPaletteName} = this.state;
        return (
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
            <DialogContent>
                <DialogContentText>
                Please enter a name for your palette. Make sure it's unique!
                </DialogContentText>
                
                    <TextValidator 
                        label='Palette name' 
                        name='newPaletteName'
                        onChange={this.handleChange} 
                        fullWidth
                        margin='normal'
                        value={newPaletteName}
                        validators={['required', 'isPaletteNameUnique']}
                        errorMessages={['Enter a palette name', 'Name already taken']}
                    />
                    
                
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button 
                    variant='contained' 
                    type='submit'
                    color='primary' 
                    >Save palette
                    </Button>
            </DialogActions>
            </ValidatorForm>
        </Dialog>
        );
      }
    
}

export default PaletteMetaForm;