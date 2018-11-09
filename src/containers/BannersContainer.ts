/**
 * Container for fetching banners
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { ActionTypes, createFetchAction, IFetchAction } from '../actions'
import { BannerTable } from '../components/contents/BannerTable'
import { IRootState } from '../states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState, props: any) => {
    return state.banners
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<IFetchAction>, props: any) => (
    {
        onMount: () => dispatch(
            createFetchAction(ActionTypes.FETCH_BANNERS_SUCCESS, props.url)
        )
    }
)

/**
 * Connect Redux state to the component
 */
export default connect(mapStateToProps, mapDispatchToProps)(BannerTable)