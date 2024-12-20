import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        activeOpacity={ 0.7 }
        onPress={ handlePress }
        className={`bg-white rounded-2xl p-4 justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={ isLoading }
    >
      <Text className="font-msemibold">{ title }</Text>
    </TouchableOpacity>
  )
}

export default CustomButton