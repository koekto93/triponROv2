import React from 'react'

import { Form, Field } from 'react-final-form'

//import { setCandidateStatus } from '../../../../redux/modules/candidate'

import { InputForm } from '../Elements'
import { Button } from '../../index'
import { FormContent, Label } from './styled'

//import { loginUser } from '../../../../api/auth'

/* type CallBackProps = {
  candidateInfo: Object,
  status: string,
  setCandidateStatus: setCandidateStatus,
} */

const Authorization = ({ handleSubmit }) => {
  const onSubmit = values => {
    //loginUser(values)
    handleSubmit(values)
    /* setCandidateStatus({
      CandidateId: id,
      Status: status,
      ...values,
    }) */
  }

  const required = value => (value ? undefined : 'Заполните поле')

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <FormContent>
            <div key="email">
              <Label>Логин</Label>
              <Field name="email" component={InputForm} validate={required} />
            </div>

            <div key="password">
              <Label>Пароль</Label>
              <Field
                name="password"
                component={InputForm}
                validate={required}
              />
            </div>
          </FormContent>
          <div /* className="form-submit" */>
            <div className="small-button">
              <Button type="submit" value="OK" tabIndex="5" />
            </div>
          </div>
        </form>
      )}
    />
  )
}

/* const mapStateToProps = state => ({
  candidateInfo: getCandidateInfo(state),
}) */

/* export default connect(
  mapStateToProps,
  { setCandidateStatus }
)(CommentModal) */

export default Authorization
