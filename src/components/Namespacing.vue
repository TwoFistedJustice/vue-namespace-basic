<template>
    <div>
        <div class="row">
            <h1>Vuex Namespacing for Beginners</h1>
            <button @click="changeaProp">Change</button>
            <h1>{{GetaProp}}</h1>
            <h1>{{GetAnotherProp}}</h1>
          <hr>
            <h1>This should be repeated below: {{getTheThing}}</h1>
            <h1>Repeat here &rarr;{{getTheGetter}}</h1>
          <hr>
            <ul>
                <li><h3>Basic Namespacing - How to do it</h3></li>
                <li>in the module default export object add the property 'namespaced: true,'</li>
                <li>When using mapGetters, etc, use object notation NOT array notation</li>
                <li>add the module name and a slash to the property value</li>
                <li>make sure your Store export is in const form like: <b>export const store = new Vuex.Store({  });</b>
                </li>

            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        computed: {
            //Object syntax FOR NAMESPACE
            ...mapGetters({
                GetaProp: 'someModule/GetaProp',
                GetAnotherProp: 'anotherModule/GetAnotherProp',
                getTheThing: 'someModule/getTheThing',
                getTheGetter: 'anotherModule/getTheGetter'
            }),
        },
        methods: {
            //Object syntax FOR NAMESPACE
            ...mapActions({
                changeaProp: 'someModule/changeaProp',
            })
        }
    }
</script>
