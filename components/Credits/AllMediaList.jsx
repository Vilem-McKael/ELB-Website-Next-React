import React, {useState} from 'react'
import CreditContainer from './CreditContainer'
import { AllMedia } from '../../data/creditMedia'

const roleObj = {
    'vocalist': false,
    'vocal contractor': false,
    'conductor': false,
    'vocal coach': false,
    'arranger': false,
    'musician': false,
    'vocal producer': false,
    'vocal consultant': false
}

const typeObj = {
    movie: false,
    tv: false,
    album: false,
    song: false,
    game: false,
    live: false,
}

const yearObj = {
    startYear: 1970,
    endYear: 2024
}

const sortObj = {
    alphabetically: false,
    reverseAlphabetically: false,
    chronologically: false,
    reverseChronologically: true
}

const emptySortObj = {
    alphabetically: false,
    reverseAlphabetically: false,
    chronologically: false,
    reverseChronologically: false
}

export default function AllMediaList({filters, viewedCredits, updateFilters, sortPreference, sortCredits}) {

    const [roles, setRoles] = useState({...filters.roles})
    const [years, setYears] = useState({...filters.years})
    const [types, setTypes] = useState({...filters.types})
    const [sortType, setSortType] = useState(sortPreference)

    const handleSortCheckbox = (evt) => {
        let newSort = {...emptySortObj, [evt.target.name]: Boolean(evt.target.checked)}
        console.log(newSort)
        sortCredits(newSort)
        setSortType(newSort)
    }

    const handleRoleCheckbox = (evt) => {
        console.log(evt.target.name, Boolean(evt.target.checked))
        setRoles({...roles, [evt.target.name]: Boolean(evt.target.checked)})
    }

    const handleTypeCheckbox = (evt) => {
        setTypes({...types, [evt.target.name]: Boolean(evt.target.checked)})
    }

    const handleSelectYear = (evt) => {
        setYears({...years, [evt.target.name]: evt.target.value})
    }

    const handleApplyFilters = () => {

        const newFilters = {
            roles: {...roles},
            types: {...types},
            years: {...years}
        }

        console.log(sortType)
        updateFilters(newFilters, sortType, viewedCredits)

    }

    const handleClearFilters = () => {

        const starterFilters = {
            roles: {...roleObj},
            types: {...typeObj},
            years: {...yearObj}
        }

        setRoles(starterFilters.roles)
        setTypes(starterFilters.types)
        setYears(starterFilters.years)

        setSortType({...sortObj})

        updateFilters(starterFilters, sortObj, AllMedia)

    }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:items-start w-full md:w-[730px] lg:w-[1000px] md:pl-[250px]'>

        {/* SEARCH, SORT, AND FILTER SIDEBAR */}
        <div className='md:fixed w-[300px] sm:w-[400px] md:w-[240px] h-[560px] border-black border-[1px] flex flex-col left-[20px] sm:top-[304px] p-4 gap-2'>

            {/* SEARCH BAR */}
            <input className='h-[30px] w-full border-black border-[1px] p-1 mb-1' placeholder='Search...' />

            {/* SORT OPTIONS */}
            <div className='flex flex-col'>

                {/* SECTION TITLE: SORT */}
                <div className='text-sm flex items-center'>
                    Sort <span className='text-xs pl-1'>(Applied Automatically)</span>
                </div>

                {/* CHECKBOXES */}
                <div className='flex flex-col text-xs border-b-[1px] border-black pb-2'>

                    {/* REVERSE CHRONOLOGICALLY */}
                    <div>
                        <input type="checkbox" name="reverseChronologically" checked={sortType.reverseChronologically} onChange={handleSortCheckbox}/>
                        <label className='pl-2'>Reverse Chrono</label>
                    </div>

                    {/* CHRONOLOGICALLY */}
                    <div>
                        <input type="checkbox" name="chronologically" checked={sortType.chronologically} onChange={handleSortCheckbox}/>
                        <label className='pl-2'>Chronologically</label>
                    </div>

                    {/* ALPHABETICALLY */}
                    <div>
                        <input type="checkbox" name="alphabetically" checked={sortType.alphabetically} onChange={handleSortCheckbox}/>
                        <label className='pl-2'>Title A-Z</label>
                    </div>

                    {/* REVERSE ALPHABETICALLY */}
                    <div>
                        <input type="checkbox" name="reverseAlphabetically" checked={sortType.reverseAlphabetically} onChange={handleSortCheckbox}/>
                        <label className='pl-2'>Title Z-A</label>
                    </div>

                </div>
            </div>

            {/* ROLE FILTER OPTIONS */}
            <div className='flex flex-col'>

                {/* SECTION TITLE: ROLE */}
                <div className='text-sm'>
                    Role
                </div>
                
                {/* ROLE CHECKBOXES */}
                <div className='flex flex-col text-xs'>

                    {/* VOCALIST */}
                    <div>
                        <input type="checkbox" name="vocalist" checked={roles['vocalist']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Vocalist</label>
                    </div>

                    {/* VOCAL CONTRACTOR */}
                    <div>
                        <input type="checkbox" name="vocal contractor" checked={roles['vocal contractor']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Vocal Contractor</label>
                    </div>

                    {/* CONDUCTOR */}
                    <div>
                        <input type="checkbox" name="conductor" checked={roles['conductor']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Conductor</label>
                    </div>

                    {/* VOCAL COACH */}
                    <div>
                        <input type="checkbox" name="vocal coach" checked={roles['vocal coach']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Vocal Coach</label>
                    </div>

                    {/* ARRANGER */}
                    <div>
                        <input type="checkbox" name="arranger" checked={roles['arranger']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Arranger</label>
                    </div>

                    {/* VOCAL CONSULTANT */}
                    <div>
                        <input type="checkbox" name="vocal consultant" checked={roles['vocal consultant']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Vocal Consultant</label>
                    </div>

                    {/* VOCAL PRODUCER */}
                    <div>
                        <input type="checkbox" name="vocal producer" checked={roles['vocal producer']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Vocal Producer</label>
                    </div>

                    {/* MUSICIAN */}
                    <div>
                        <input type="checkbox" name="musician" checked={roles['musician']} onChange={handleRoleCheckbox}/>
                        <label className='pl-2'>Musician</label>
                    </div>

                </div>
            </div>

            {/* YEAR FILTERS */}
            <div className='flex flex-col'>

                {/* SECTION TITLE: YEAR */}
                <div className='text-sm'>Year</div>

                {/* YEAR FIELDS */}
                <div className='flex flex-col pl-4 text-xs'>

                    {/* START YEAR */}
                    <div>
                        <input type='number' min="1970" max="2024" value={years.startYear} name='startYear' onChange={handleSelectYear}/>
                        <label className='pl-2'>Start</label>
                    </div>

                    {/* END YEAR */}
                    <div>
                        <input type='number' min='1970' max='2024' value={years.endYear} name='endYear' onChange={handleSelectYear} />
                        <label className='pl-2'>End</label>
                    </div>

                </div>
            </div>

            {/* MEDIA TYPE FILTERS */}
            <div className='flex flex-col'>

                {/* SECTION TITLE: TYPE OF MEDIA */}
                <div className='text-sm'>
                    Type of Media
                </div>

                {/*  */}
                <div className='text-xs flex flex-col'>

                    {/* MOVIE */}
                    <div>
                        <input type="checkbox" name="movie" checked={types.film} onChange={handleTypeCheckbox}/>
                        <label className='pl-2'>Movie</label>
                    </div>

                    {/* TV */}
                    <div>
                        <input type="checkbox" name="tv" checked={types.tv} onChange={handleTypeCheckbox}/>
                        <label className='pl-2'>TV</label>
                    </div>

                    {/* ALBUM */}
                    <div>
                        <input type="checkbox" name="album" checked={types.album} onChange={handleTypeCheckbox}/>
                        <label className='pl-2'>Album</label>
                    </div>

                    {/* SONG */}
                    <div>
                        <input type="checkbox" name="song" checked={types.song} onChange={handleTypeCheckbox}/>
                        <label className='pl-2'>Song</label>
                    </div>

                    {/* GAME */}
                    <div>
                        <input type="checkbox" name="game" checked={types.game} onChange={handleTypeCheckbox}/>
                        <label className='pl-2'>Game</label>
                    </div>

                    {/* LIVE */}
                    <div>
                        <input type="checkbox" name="live" checked={types.live} onChange={handleTypeCheckbox}/>
                        <label className='pl-2'>Live</label>
                    </div>

                </div>
            </div>

            {/* APPLY AND CLEAR FILTER BUTTONS */}
            <div className='w-full flex justify-evenly mt-1'>

                {/* APPLY FILTER */}
                <button className='px-2 py-1 rounded-lg font-medium border-black border-[1px] text-sm transform duration-100 hover:scale-105' onClick={handleApplyFilters}>Apply</button>

                {/* CLEAR FILTER */}
                <button className='px-2 py-1 rounded-lg font-medium border-black border-[1px] text-sm transform duration-100 hover:scale-105' onClick={handleClearFilters}>Clear</button>
    
            </div>
        </div>

        {/* CREDITS TABLE */}
        <table className='flex w-full sm:w-[480px] md:w-[480px] lg:w-[740px] xl:w-[1000px] flex-col mb-12 text-xs sm:text-sm font-normal mt-8 md:mt-0'>
            <tbody>

                {/* TABLE HEADER WITH COLUMN NAMES */}
                <tr className='w-full h-[44px] text-start border-y sm:border border-black text-sm sm:text-g'>
                    <th className='w-auto sm:w-[200px] p-2 border-r-[1px] border-black text-start'>
                        Type
                    </th>
                    <th className='w-auto sm:w-[400px] p-2 border-r-[1px] border-black text-start'>
                        Title
                    </th>
                    <th className='w-auto sm:w-[200px] p-2 border-r-[1px] border-black text-start'>
                        Artist
                    </th>
                    <th className='w-auto sm:w-[100px] p-2 border-r-[1px] border-black text-start'>
                        Year
                    </th>
                    <th className='w-auto sm:w-[200px] p-2 text-start'>
                        Roles
                    </th>
                </tr>

                {/* TABLE CONTENTS */}
                {viewedCredits.map((credit, index) => {
                    return <CreditContainer key={index} credit={credit}/>
                })}
            </tbody>
        </table>
    </div>
  )
}
