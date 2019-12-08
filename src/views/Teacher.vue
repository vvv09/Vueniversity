<template>
    <div>
        <h3 v-if="id == -1" style="background-color: #26A69A">Новый Преподаватель</h3>
        <h3 v-else style="background-color: #2196F3">Преподаватель : id ={{id}}</h3>
        <div class="container">
            <form @submit="doSubmit">
                <label for="lastName">Фамилия</label>
                <input type="text" class="form-control" v-model="lastName" id="lastName">
                <label for="firstName">Имя</label>
                <input type="text" class="form-control" v-model="firstName" id="firstName">
                <label for="middleName">Отчество</label>
                <input type="text" class="form-control" v-model="middleName" id="middleName">
                <button class="btn btn-success" type="submit">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
    import ItemService from "@/services/teacherService"

    export default {
        name: "Teacher",
        data() {
            return {
                firstName: "",
                middleName: "",
                lastName: ""
            }
        },
        computed: {
            id() {
                return this.$route.params.id
            }
        },
        methods: {
            refreshForm() {
                ItemService.retrieveItem(this.id)
                    .then(response => {
                        this.firstName = response.data.firstName;
                        this.middleName = response.data.middleName;
                        this.lastName = response.data.lastName;
                    })
            },
            doSubmit(e) {
                e.preventDefault();
                if (this.id == -1) {
                    ItemService.createItem({firstName: this.firstName, middleName: this.middleName, lastName: this.lastName})
                        .then(() => {this.$router.push('/teachers')})
                } else {
                    ItemService.updateItem(this.id, {firstName: this.firstName, middleName: this.middleName, lastName: this.lastName})
                        .then(() => {this.$router.push('/teachers')})
                }
            }
        },
        created() {
            this.refreshForm();
        }
    }
</script>

<style scoped>

</style>