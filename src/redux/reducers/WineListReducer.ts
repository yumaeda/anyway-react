/**
 * Reducer for wine list used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Clone from 'clone';
import * as Redux from 'redux';
import keys from '../actions/ActionTypeKeys';
import { ICategoryFilterAction } from '../actions/FilterActions';
import { IFilteredWines, initFilteredWines } from '../states/IFilteredWines';

/**
 * Reducer for wine filter change
 */
export const WineListReducer: Redux.Reducer<IFilteredWines> =
    (state = initFilteredWines, action: Redux.AnyAction) => {
        let newState = state;
        switch (action.type) {
            case keys.CATEGORY_FILTER:
                if (state.filter !== 'category') {
                    newState = Clone(state);
                    newState.filter = 'category';
                    newState.wines = [
                        {
                            barcode_number: '11111',
                            combined_name: 'Gigondas',
                            combined_name_jpn: 'ジゴンダス',
                            producer: 'Gigal',
                            producer_jpn: 'ギガル',
                            vintage: '2011'
                        },
                        {
                            barcode_number: '11112',
                            combined_name: 'Chateauneuf-dupup',
                            combined_name_jpn: 'シャトーヌフ・ドゥ・パプ',
                            producer: 'Pegau',
                            producer_jpn: 'ペゴー',
                            vintage: '2000'
                        },
                    ];
                }
                break;
            case keys.VINTAGE_FILTER:
                if (state.filter !== 'vintage') {
                    newState = Clone(state);
                    newState.filter = 'vintage';
                    newState.wines = [
                        {
                            barcode_number: '11111',
                            combined_name: 'Chambolle-Musigny',
                            combined_name_jpn: 'シャンボール・ミュジニー',
                            producer: 'Rumier',
                            producer_jpn: 'ルーミエ',
                            vintage: '1980'
                        },
                        {
                            barcode_number: '11112',
                            combined_name: 'Chateau Margaux',
                            combined_name_jpn: 'シャト・マルゴー',
                            producer: 'Chateau Margaux',
                            producer_jpn: 'シャト・マルゴー',
                            vintage: '2005'
                        },
                    ];
                }
                break;

            default:
                break;
        }

        return newState;
    };
