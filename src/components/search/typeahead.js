// working example of Bloodhound
// https://stackoverflow.com/questions/21530063/how-do-we-set-remote-in-typeahead-js
// https://stackoverflow.com/questions/20198247/twitters-typeahead-js-suggestions-are-not-styled-have-no-border-transparent-b
// https://stackoverflow.com/questions/30750916/how-to-reference-typeahead-and-bloodhound-when-loading-npm-typeahead-js

import $ from 'jquery';

import { API_SEARCH } from '../../apis';
import './typeahead.bundle.min.js';
import './typeahead.css';

const Bloodhound = require('bloodhound-js');

const suggests = new Bloodhound({
    datumTokenizer(datum) {
        return new Bloodhound.tokenizers.whitespace(datum.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        wildcard: '%QUERY',
        url: API_SEARCH,
        transform: movies =>
            movies.results.map(({ id, original_title }) => ({
                id,
                value: original_title
            }))
    }
});

export const initTypeahead = (selector, onSelect) => {
    const options = {
        hint: true,
        highlight: true,
        minLength: 2
    };

    const datasets = {
        displayKey: 'value',
        source: suggests
    };

    const onSelectHandler = (_, { id }) => {
        $(selector).blur();
        onSelect(id);
    };

    $(selector)
        .typeahead(options, datasets)
        .on('typeahead:select', onSelectHandler);
};
