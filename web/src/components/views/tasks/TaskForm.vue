<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/task">{{$t('task')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{$t('new')}}</li>
            </ol>
        </nav>
    </div>
</template>