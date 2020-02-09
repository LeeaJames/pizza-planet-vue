<template>
    <div class="adminWrapper">
        <div class="currentUserWrapper"></div>

        <NewPizza />
        <div class="menuWrapper">
            <h3>Menu</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Remove from menu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Marg</td>
                        <td>
                            <button type="button" class="btn_red">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="orderWrapper">
            <h3>Current Order (5):</h3>
            <table>
               <thead>
                   <tr>
                       <th>Item</th>
                       <th>Size</th>
                       <th>Quantity</th>
                       <th>Price</th>
                   </tr>
               </thead>
               <tbody>
                   <tr class="orderNumber">
                       <th colspan="4">
                           <strong>Order Number: 4</strong>
                           <button type="button" class="btn_red">&times;</button>
                        </th>   
                   </tr>
                   <tr>
                       <td>mar</td>
                       <td>9</td>
                       <td>2</td>
                       <td>£60</td>
                   </tr>
               </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NewPizza from "./NewPizza";

export default {
    name:'admin',
    components: {
        NewPizza
    }
};
</script>

<style scoped>
.adminWrapper {
    margin:10px;
}

.currentUserWrapper,
.orderWrapper,
.menuWrapper {
    margin: 10px 0;
    padding: 10px;
    border:solid 1px #f79e38;
}

table {
    text-align: left;
    width:70vw;
}

.orerNumber th {
    background-color: #ddd;
}

.orerNumber button {
    margin: 0 10px;
}

</style>